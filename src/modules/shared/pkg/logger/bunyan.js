import Bunyan from 'bunyan';
import PrettyStream from 'bunyan-prettystream';

const prettyStdOut = new PrettyStream();
prettyStdOut.pipe(process.stdout);

export default Bunyan.createLogger({
  name: 'core',
  level: 'debug',
  streams: [
    {
      type: 'raw',
      stream: prettyStdOut,
    },
  ],
});
