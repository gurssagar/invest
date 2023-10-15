import PocketBase from 'pocketbase';

// eslint-disable-next-line no-empty-pattern
export async function load( { cookies } )
{   
    await cookies.set('animationsLoaded', 'false', 
    {
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60
      });

    const animationsLoaded = await cookies.get('animationsLoaded');
    console.log(animationsLoaded);
    const pb = new PocketBase("https://dist.techwe.me/");

    const records = await pb.collection('Events').getList(1, 3,{
        sort: '-created',
    });


    const results = records.items.map((record)=> {return {Heading:record.Heading,Name:record.Name,Text_Input:record.Text_Input,Image_Link:record.Image_Link,Date:record.Date,Year:record.Year,Link:record.Link,Team:record.Team}})
    return{
        records: results,
        animationsLoaded: animationsLoaded,
    }
}