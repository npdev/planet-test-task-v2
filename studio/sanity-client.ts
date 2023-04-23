import sanityClient from '@sanity/client'
import clientConfig from 'config/client.config';

export default sanityClient(clientConfig)
