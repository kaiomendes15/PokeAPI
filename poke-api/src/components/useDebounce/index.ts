// Importa o hook useRef do React.
import { useRef } from "react"

// Define uma tipagem UseDebounceProps
type useDebounceProps = {
    // garantir que fn seja uma função que pode receber um número variável de argumentos (...args: any[])
    // Usar ...args: any[] ao invés de (args: any) na tipagem da função fn permite que ela aceite qualquer número de argumentos, deixando o código mais flexível e seguro.
    fn: (...args: any[]) => void,

    delay: number,
}

export default function useDebounce({fn, delay}: useDebounceProps) {

    // FN => a função a ser chamada após o debounce
    // delay => tempo para o atraso na chamada da função


    // timeoutRef armazena o ID do setTimeout, retornado pela função window.setTimeout
    // Especifica o tipo number | null para evitar erros.
    //  timeoutRef inicia como null.
    const timeoutRef = useRef<number | null>(null);


    function debouncedFn(...args: any[]) {
        // debouncedFn recebe qualquer número de argumentos 


        // limpar qualquer timeout que já esteja ativo
        // isso evita que a função fn seja chamada prematuramente.
        // * A exclamação (!) é chamada de non-null assertion. Ela informa ao compilador que, naquele ponto específico do código, estamos certos de que timeoutRef.current não é null ou undefined, mesmo que o tipo permita isso (number | null).
        // ? timeoutRef.current é inicializado como null, mas logo após o primeiro setTimeout, ele sempre armazenará um valor number, o ID do timeout ativo. Usar o "!" é um jeito de evitar erros de compilação, mas deve-se ter cuidado para usá-lo apenas quando for realmente seguro afirmar que o valor não é nulo.
        
        window.clearTimeout(timeoutRef.current!)


        // window.setTimeout() => ISSO AQ RETORNA UM ID
        // cria um novo timeout e atualiza timeoutRef.current com o ID desse timeout
        // após o delay, a função é chamada com os args
        timeoutRef.current = window.setTimeout(() => {

            fn(...args);

        }, delay)
        
    }

    // Retorna a função debouncedFn, que será usada no componente React que invocar o useDebounce.
    return debouncedFn;
}