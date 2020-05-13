import {BlockData} from "../page/types/BlockData";
import {BlockKind} from "../page/types/BlockIndex";

export const samplePageData: BlockData[] = [
    {
        id: '1',
        kind: BlockKind.Cover,
        data: {
            suptitle: 'OUR COMPANY',
            title: 'Bring your ideas to life',
            description: 'Anything you\'ve even dreamed about is possible to realise just at the moment when you decided to win.'
        }
    },
    {
        id: '2',
        kind: BlockKind.Article,
        data: {
            header: 'How to be creative',
            text: `Though creativity cannot be taught, it can certainly be nurtured. 
        Find a routine that works for you. Routines can be positive if they reinforce a healthy, creative mindset; 
        they can be counterproductive if they actually keep you from being creative. 
        While breaking your routine once in a while to force new ways of thinking is good, 
        what if growing/learning/experiencing new things was built into your routine as a given? 
        The people who speak negatively about routine have probably not developed a routine that puts them on a path 
        of internal growth. The key is to discover creative rituals that put you in a more creative mindset`,
        },
        style: {
            header: {
                color: 'red'
            }
        }
    },
    {
        id: '3',
        kind: BlockKind.Article,
        data: {
            header: 'Custom header3',
            text: 'Custom text3'
        }
    }
]
