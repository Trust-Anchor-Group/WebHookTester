function RandomizeID()
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function ()
	{
		if (xhttp.readyState === 4)
		{
			if (xhttp.status === 200)
				document.getElementById("ID").value = xhttp.responseText;
			else
				ShowError(xhttp);
		}
	};

	xhttp.open("POST", "/Settings/RandomizePassword", true);
	xhttp.send();
}

function ShowPage()
{
	OpenUrl("Show.md?ID=" + encodeURI(document.getElementById("ID").value));
}

function OpenExampleScript()
{
	var Div = document.getElementById("ScriptExample");
	var Pre = Div.getElementsByTagName("PRE")[0];
	var Code = Pre.getElementsByTagName("CODE")[0];

	OpenUrl("/Prompt.md?Expression=" + encodeURI(Code.innerText));
}

function PostReceived(Data)
{
	console.log(Data);

	var Main = document.body.getElementsByTagName("MAIN")[0];
	var Section = Main.getElementsByTagName("SECTION")[0];
	var NewSection = document.createElement("SECTION");
	var H1 = document.createElement("H1");
	H1.innerText = new Date(Data.Timestamp * 1000.0).toLocaleString();
	NewSection.appendChild(H1);

	var H2 = document.createElement("H2");
	H2.innerText = "HTTP Headers";
	NewSection.appendChild(H2);

	var Table = document.createElement("TABLE");
	var THead = document.createElement("THEAD");
	Table.appendChild(THead);

	var Tr = document.createElement("TR");
	var Th = document.createElement("TH");
	Th.innerText = "Key";
	Tr.appendChild(Th);
	Th = document.createElement("TH");
	Th.innerText = "Value";
	Tr.appendChild(Th);
	THead.appendChild(Tr);

	var TBody = document.createElement("TBODY");
	Table.appendChild(TBody);

	var i, c = Data.Headers.length;
	var Code;
	var Pre;

	for (i = 0; i < c; i++)
	{
		var Header = Data.Headers[i];

		Tr = document.createElement("TR");
		var Td = document.createElement("TD");
		Code = document.createElement("CODE");
		Code.innerText = Header.Key;
		Td.appendChild(Code);
		Tr.appendChild(Td);
		Td = document.createElement("TD");
		Code = document.createElement("CODE");
		Code.innerText = Header.Value;
		Td.appendChild(Code);
		Tr.appendChild(Td);
		TBody.appendChild(Tr);
	}

	NewSection.appendChild(Table);

	if (Data.HasError)
	{
		H2 = document.createElement("H2");
		H2.innerText = "Payload Decoding Error";
		NewSection.appendChild(H2);

		Pre = document.createElement("PRE");
		Code = document.createElement("CODE");

		var Pretty = JSON.stringify(Data.Error, null, 2);

		Code.textContent = Pretty;
		Pre.appendChild(Code);
		NewSection.appendChild(Pre);
	}

	if (Data.HasData)
	{
		H2 = document.createElement("H2");
		H2.innerText = "Payload (Decoded)";
		NewSection.appendChild(H2);

		Pre = document.createElement("PRE");
		Code = document.createElement("CODE");

		var Pretty = JSON.stringify(Data.Decoded, null, 2);

		Code.textContent = Pretty;
		Pre.appendChild(Code);
		NewSection.appendChild(Pre);
	}

	H2 = document.createElement("H2");
	H2.innerText = "Payload (Binary)";
	NewSection.appendChild(H2);

	Pre = document.createElement("PRE");
	Code = document.createElement("CODE");

	Code.textContent = Data.Data;
	Pre.appendChild(Code);
	NewSection.appendChild(Pre);

	if (Section.nextSibling)
		Main.insertBefore(NewSection, Section.nextSibling);
	else
		Main.appendChild(NewSection);
}