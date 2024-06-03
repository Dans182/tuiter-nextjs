import Link from "next/link";

export default function Timeline({ userName }) {
  return (
    <>
      <h1>This is the timeline of {userName}</h1>
      <Link href="/">Go home</Link>
      <style jsx>
        {`
          h1 {
            font-size: 36px;
            color: red;
          }
        `}
      </style>
    </>
  );
}

Timeline.getInitialProps = () => { //es importante destacar que el getInitialProps solo funciona en las pages. No funciona en componentes.
    return fetch("http://localhost:3000/api/hello")
      .then((res) => res.json())
    
  };

// Timeline.getInitialProps = () => {
//   return fetch("/api/hello")
//     .then((res) => res.json())
//     .then((response) => {
//       const { userName } = response;
//       return { userName };
//     });
// };
//aca le estamos pasando las props que va a recibir el componente
//Este metodo se esta ejecutando en el servidor Y lo que hace es ejecutarlo antes de renderizarlo.