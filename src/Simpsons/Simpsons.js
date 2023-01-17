import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id: 1,
            name: 'Homer',
            image: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
            descript: 'Homer Jay Simpson (born May 12, 1956) is a man from Springfield. He is the spouse of' +
                ' Marge Simpson and father of Bart, Lisa and Maggie Simpson.'
        },
        {
            id: 2,
            name: 'Marge',
            image: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png',
            descript: 'Marjorie Jacqueline "Marge" Simpson (née Bouvier)is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series.'
        },
        {
            id: 3,
            name: 'Bart',
            image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png',
            descript: 'Bartholomew "Bart" Jojo Simpson (born April 1 or February 23) is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons.'
        },
        {
            id: 4,
            name: 'Lisa',
            image: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png',
            descript: 'Lisa Marie Simpson (born May 9) is the elder daughter and middle child of the Simpson family' +
                ' and one of the two tritagonists (along with Marge,) of The Simpsons series.'
        },
        {
            id: 5,
            name: 'Meggie',
            image: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png',
            descript: 'Margaret Evelyn Lenny "Maggie" Simpson (born January 14, 1988) is the 1-year-old daughter and' +
                ' youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons.'
        }

    ]
    return (
        <div>
            {
                simpsons.map(simpson =><Simpson key={simpson.id} simpson={simpson}/>)
            }
        </div>
    );
};

export {Simpsons};