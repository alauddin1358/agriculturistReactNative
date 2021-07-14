import React from "react"
import Block from '../../components/Block'
import { useNavigation } from '@react-navigation/native'
import PDFView from 'react-native-view-pdf';




export default PdfViewScreen = (props) => {

    const navigation = useNavigation();

    console.log('props', props);

    const resourceType = 'base64';

    const resources = {
        // file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
        // url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        base64: props?.route?.params?.item?.fileData,
      };

    return (
        

        <Block block>
            <PDFView
                style={{ flex: 1 }}
                resource={resources[resourceType]}
                resourceType={resourceType}
                onLoad={() => console.log(`PDF rendered from ${resourceType}`)}
                onError={(error) => console.log('Cannot render PDF', error)}
            />
        </Block>

    );
}