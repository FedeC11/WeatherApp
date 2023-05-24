import ProgressBar from 'react-bootstrap/ProgressBar';

function Barra({humedadMedida}) {
  return <ProgressBar animated variant="warning" now={humedadMedida ? humedadMedida :0} />;
}

export default Barra;