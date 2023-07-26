import { version } from 'src/autobuild_version';

const Version: React.FC = () => {

    return(
        <header>
            Version courante : {version}
        </header>
    )
}
 export default Version;
