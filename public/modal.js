import ranking from './ranking.json';

const machines = ranking.data;

document.addEventListener("DOMContentLoaded", function() {
    let rankingLink = document.getElementById("ranking-link");
    var modal = document.getElementById("myModal");

    if (rankingLink && modal) {
        rankingLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevenir que el enlace redirija

            // Datos de ejemplo desde JSON (simulados)
            let rankingData = machines;

            // Verificar que el elemento 'userList' exista antes de manipularlo
            const userList = document.getElementById("userList");
            if (userList) {
                userList.innerHTML = ""; // Limpiar lista antes de añadir elementos

                // Crear elementos de lista
                const topTen = rankingData.slice(0, 10);

                // Iterar sobre los primeros cinco elementos para las dos columnas
                for (let i = 0; i < 5; i++) {
                    const item1 = topTen[i];
                    const item2 = topTen[i + 5];

                    // Crear elementos de lista para la primera columna
                    const li1 = document.createElement("div");
                    li1.innerHTML = `${i + 1}. ${getRankEmoji(i)} ${item1.author} - ${item1.score} pts`;
                    li1.classList.add("border", "text-black", "border-gray-300", "p-2", "rounded-md");

                    // Crear elementos de lista para la segunda columna
                    const li2 = document.createElement("div");
                    li2.innerHTML = `${i + 6}. ${getRankEmoji(i + 5)} ${item2.author} - ${item2.score} pts`;
                    li2.classList.add("border", "text-black", "border-gray-300", "p-2", "rounded-md");

                    // Agregar elementos a la lista
                    userList.appendChild(li1);
                    userList.appendChild(li2);
                }
            } else {
                console.error("Elemento 'userList' no encontrado.");
            }

            // Mostrar el modal
            if (modal) {
                modal.style.display = "block";
            }
        });

        // Cerrar el modal si se hace clic fuera del contenido
        window.onclick = function(event) {
            if (event.target == modal && modal) {
                modal.style.display = "none";
            }
        }
    } else {
        console.error("Elemento 'ranking-link' o 'myModal' no encontrado.");
    }
});

// Función para obtener emojis de ranking
function getRankEmoji(index) {
    switch (index) {
        case 0:
            return '<i class="fas fa-award text-yellow-500 mr-1"></i>'; // Emoji para Top 1
        case 1:
            return '<i class="fas fa-medal text-gray-500 mr-1"></i>'; // Emoji para Top 2
        case 2:
            return '<i class="fas fa-trophy text-orange-500 mr-1"></i>'; // Emoji para Top 3
        default:
            return '';
    }
}
