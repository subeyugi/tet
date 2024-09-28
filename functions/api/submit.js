export async function onRequest(context) {
  try{
    console.log("onRequest send");
    return new Response("sent!!");
  }catch(err){
    return new Response("error", {status:400});
}
