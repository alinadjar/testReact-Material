
import { connect } from 'react-redux';
import { toggleStateIsLoading, getData, fetchOverwriteData } from '../../storeReduxi';


export const TableConnector = (presentationComponent) => {

    const mapStateToProps = (storeData) => ({
        medals: storeData.badges,
        isNowLoading: storeData.isLoading
    })


    const mapDispatchToProps = {
        toggleLoading: toggleStateIsLoading,
        //getDATA: getData
        getDATA: fetchOverwriteData
    }

    return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);
}