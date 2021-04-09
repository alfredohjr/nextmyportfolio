import Layout from '../../src/components/Layout';

import AppIdeasMenu from '../../src/components/AppIdeasMenu';

import readAppIdeas from '../../src/utils/readAppIdeas';

export function getStaticProps(){

    const paths = readAppIdeas();

    return {
        props: {paths}
    }
}

export default function AppIdeas(props) {

    const data = props.paths;

    return (
        <Layout nameTitle="AppIdeas">
            <AppIdeasMenu props={data} />
        </Layout>
    )
}