import PocketBase from 'pocketbase';

// eslint-disable-next-line no-empty-pattern
export async function load({}){
    const pb = new PocketBase("https://dist.techwe.me/");

    const records = await pb.collection('Events').getList(1, 50,{
        sort: '-created',
    });


    const results = records.items.map((record)=> {return {Heading:record.Heading,Invest:record.Invest,Name:record.Name,Text_Input:record.Text_Input,Image_Link:record.Image_Link,Date:record.Date,Year:record.Year,Link:record.Link,Hashtag:record.Hashtag,BlogContent:record.BlogContent,Location:record.Location,Time:record.Time, Register:record.Register}})
    return{
        records: results
    }
}