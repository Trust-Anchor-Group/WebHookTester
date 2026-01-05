ID:=null;
if !Request.Header.TryGetQueryParameter("ID",ID) then BadRequest("Missing ID query parameter.");


Decoded:=Request.HasData ? Request.DecodeDataAsync() : null;
HasError:=Decoded?.HasError ?? null;
Error:=Decoded?.Error ?? null;
Decoded:=Decoded?.Decoded;

Data:=
{
	"Timestamp": NowUtc,
	"Headers": [foreach H in Request.Header do {"Key": H.Key, "Value": H.Value}],
	"HasData": Request.HasData,
	"ContentType": Request.Header.ContentType?.Value,
	"Data": (Request.HasData ? System.Convert.ToBase64String(Request.ReadDataAsync(), System.Base64FormattingOptions.InsertLineBreaks) : null),
	"HasError": HasError,
	"Error": Error,
	"Decoded": Decoded
};
NrForwarded:=count(PushEvent("/WebHookTester/Show.md",{"ID":ID},"PostReceived",Data));

{
	"Forwarded": NrForwarded
}
