import PocketBase from 'pocketbase';

export async function load({}){
    const pb = new PocketBase("https://dist.techwe.me/");

    const records = await pb.collection('Events').getList(1, 15, {
        sort: '-created',
    });



    const results = records.items.map((record)=> {return {Name:record.Name,Heading:record.Heading,Text_Input:record.Text_Input,Image_Link:record.Image_Link,Date:record.Date,Year:record.Year,Link:record.Link,Team:record.Team}})
    return{
        records: results
    }
}