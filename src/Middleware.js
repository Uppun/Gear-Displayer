import GearSetActions from './actions/GearSetActions';
import request from 'request';

const path = 'http://ffxiv.ariyala.com/store.app?';
const cors_anywhere_url = 'https://cors-anywhere.herokuapp.com/';

export default function initializePage() {
    request.get({uri: cors_anywhere_url + path, qs: {identifier: '14WX1'}}, (err, res, body) => {
        if (err || res.statusCode !== 200) {
            console.error('error:', err); 
            console.log('statusCode:', res && res.statusCode); 
        }
        
        const parsedData = JSON.parse(body);

        const requestedItems = parsedData.datasets[parsedData.content].normal.items;
        const items = [];

        for (const slot in requestedItems) {
            items.push(requestedItems[slot]);
        }

        const formData = {
            queries:[
                {items}
            ],
            existing:{}
        };
    
        request.post({url: cors_anywhere_url + 'http://ffxiv.ariyala.com/items.app', form: JSON.stringify(formData)}, (error, res, body) => {
            const itemData = JSON.parse(body);
            const itemBuild = {};
            const job = parsedData.content;

            for (const [slot, id] of Object.entries(parsedData.datasets[job].normal.items)) {
                for (const item of itemData) {
                    if (id === item.itemID) {
                        itemBuild[slot] = item;
                    }
                }
            }
            const materia = parsedData.datasets[job].normal.materiaData;

            GearSetActions.initialize(itemBuild, materia, job);
        });
    });
}

