/* eslint-disable prettier/prettier */
import { useMemo, useEffect } from 'react';

function useMedia(mediaIds) {
    const mediaList = useMemo(() => {
        const generateMediaList = (mediaIds) => {
            const list = mediaIds.reduce((acc, el) => {

                return { ...acc, [el.title]: el };
            }, {});
            return list;
        };
        // Perform some expensive calculation to generate the media list
        return generateMediaList(mediaIds);
    }, [mediaIds]);

    useEffect(() => {
        // Save the media list to an object
        saveMediaList(mediaList);

    }, [mediaList]);

    const saveMediaList = (mediaList) => {
        console.log('saving Media List');

    };

    return mediaList;
}

export default useMedia;
