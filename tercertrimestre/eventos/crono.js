        let cronometro = document.getElementById('cronometro');
        let intervalo = null;
        let milisegundos = 0, segundos = 0, minutos = 0;

        function actualizarPantalla() {
            let ms = milisegundos < 10 ? '0' + milisegundos : milisegundos;
            let s = segundos < 10 ? '0' + segundos : segundos;
            let m = minutos < 10 ? '0' + minutos : minutos;
            cronometro.textContent = `${m}:${s}:${ms}`;
        }

        function contarTiempo() {
            milisegundos += 1;
            if (milisegundos >= 100) {
                milisegundos = 0;
                segundos += 1;
            }
            if (segundos >= 60) {
                segundos = 0;
                minutos += 1;
            }
            actualizarPantalla();
        }

        function iniciar() {
            if (intervalo === null) {
                intervalo = setInterval(contarTiempo, 10);
            }
        }

        function pausar() {
            clearInterval(intervalo);
            intervalo = null;
        }

        function reiniciar() {
            clearInterval(intervalo);
            intervalo = null;
            milisegundos = 0;
            segundos = 0;
            minutos = 0;
            actualizarPantalla();
        }