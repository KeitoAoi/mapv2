import * as React from "react"
import Svg, { Path, G, Text, Circle } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title, a */

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="100%" 
    height="100%" 
    viewBox={`0 0 1410 1000`}
    {...props}
  >
    <Path fill="#fff" d="M0 0h1410v1007H0z" />
    <Path fill="#f2f2f2" d="M0 810h333v295H0z" />
    <G fill="#001e0d" fontFamily="Arial">
      <Text x={10} y={837} fontSize={20} fontWeight="bold">
        {"SINGAPORE MRT/LRT MAP"}
      </Text>
      <Text x={10} y={855} fontSize={10}>
        {"Updated on 19 Jun 2018"}
      </Text>
    </G>
    <Path  d="M10 867.5h313V879H10z" />
    <Path fill="#d42e12" d="M10 880h313v11.5H10z" />
    <Path fill="#90a" d="M10 892.5h313V904H10z" />
    <Path fill="#fa9e0d" d="M10 905h313v11.5H10z" />
    <Path fill="#005ec4" d="M10 917.5h313V929H10z" />
    <Path fill="#784008" d="M10 930h313v11.5H10z" />
    <Path fill="#09a" d="M10 942.5h313V954H10z" />
    <Path fill="#f266b5" d="M10 955h313v11.5H10z" />
    <Path fill="#999" d="M10 967.5h313V979H10z" />
    <Path fill="#87cefa" d="M10 980h313v11.5H10z" />
    <G fontFamily="Arial" fill="#fff" fontSize={11} fontWeight="bold">
      <Text x={20} y={877.5}>
        {"East West Line (EW)"}
      </Text>
      <Text x={20} y={890}>
        {"North South Line (NS)"}
      </Text>
      <Text x={20} y={902.5}>
        {"North East Line (NE)"}
      </Text>
      <Text x={20} y={915}>
        {"Circle Line (CC)"}
      </Text>
      <Text x={20} y={927.5}>
        {"Downtown Line (DT)"}
      </Text>
      <Text x={20} y={940}>
        {"Thomson-East Coast Line (TE)"}
      </Text>
      <Text x={20} y={952.5}>
        {"Jurong Region Line (JR)"}
      </Text>
      <Text x={20} y={965}>
        {"Cross Island Line (CR)"}
      </Text>
      <Text x={20} y={977.5}>
        {"Light Rapid Transit (LRT) Lines"}
      </Text>
      <Text x={20} y={990}>
        {"Johor Bahru-Singapore RTS-Link"}
      </Text>
    </G>
    <G fill="none" strokeWidth={4}>
      <G id="a" stroke="#009645">
        <Path d="M1227 658v16q0 20 20 20h84" />
        <Path d="m1284 523-25 25q-14.14 14.14-14.14 34.14v57q0 20-20 20h-239q-20 0-34.14 14.14l-177 177q-14.14 14.14-34.14 14.14h-15q-20 0-34.14-14.14l-21-21q-14.14-14.14-14.14-34.14T642.16 761l-232.4-232.4q-14.14-14.14-34.14-14.14H95.02q-20 0-20 20v146" />
      </G>
      <Path
        d="M286 514V87q0-20 20-20h460q20 0 20 20v344q0 20-14.14 34.14l-104 104q-14.14 14.14 0 28.28l162 162q14.14 14.14 0 28.28l-67.7 67.7q-14.14 14.14 0 28.28l72 72"
        id="b"
        stroke="#d42e12"
      />
      <G id="c" stroke="#90a">
        <Path d="m582 866 173.2-173.2q14.14-14.14 14.14-28.28v-28q0-20 14.14-34.34l390-390" />
        <Path d="m1254 132.46-92 91.3" strokeDasharray="8, 8" />
      </G>
      <G id="d" stroke="#fa9e0d">
        <Path d="M754 689q20 0 34.14 14.14l124 124q14.14 14.14 28.28 0" />
        <Path d="M582 867a265 265 0 1 1 211 47" />
        <Path
          d="M582 867a265 265 0 0 0 211 47"
          strokeWidth={4.5}
          strokeDasharray="10, 10"
        />
      </G>
      <G id="e" stroke="#005ec4">
        <Path d="M479 225v157q0 20 14.14 34.14l48.5 48.5q14.14 14.14 34.14 14.14h56q20 0 34.14 14.14l284 284q13 14.14 0 30c-16.1 22.6-47.3 54.9-93.9 80q-20.34 9-41.1-10l-121-121" />
        <Path d="M698 760q-14.14-14.14 0-28.28l10-10q14.14-14.14 28.28-14.14h61q20 0 34.14-14.14l79-79q14.14-14.14 34.14-14.14h321.5q20 0 20 20v69" />
      </G>
      <Path d="M1286 695v90" stroke="#005ec4" strokeDasharray="8, 8" />
      <Path
        d="m496 34 147.8 147.8q14.14 14.14 14.14 34.14v190"
        stroke="#784008"
      />
      <Path
        d="m496 34 147.8 147.8q14.14 14.14 14.14 34.14v562q0 20 14.14 34.14l87 87q14.14 14.14 34.14 14.14h134q20 0 34.14-14.14l99-99q14.14-14.14 28.28-14.14h283q20 0 20-20v-52q0-20-20-20h-35"
        stroke="#784008"
        strokeDasharray="8, 8"
      />
      <G stroke="#f266b5" strokeDasharray="8, 8">
        <Path d="m77 597 5.5 5.5q14.14 14.14 20 14.14h257.3s12.1.149 17.6-5.27c5.54-5.42 8.9-21.8 8.9-21.8" />
        <Path d="M385 595a355 355 0 0 1 665-101M1391 698v-48q0-20-14.14-34.14l-83.8-83.8q-14.14-14.14-34.14-14.14h-161s-14.8-.018-30.2-.049c-7.76 0-17.1-21-17.1-21M1177 209.5l67 67q14.14 14.14 14.14 34.14v167.4q0 20 14.14 34.14" />
      </G>
      <G stroke="#999">
        <Path d="M284.4 225.6h207q10 0 17.07-7.07l19.2-19.2q7.07-7.07 17.07-7.07h10q10 0 10 10v46.6q0 10-10 10h-10q-10 0-17.07-7.07l-19.2-19.2q-7.07-7.07-17.07-7.07M1081 306l-7.76-7.76q-7.07-7.07-7.07-17.07v-20q0-10-7.07-17.07l-19-19q-7.07-7.07-14.14 0l-26 26q-7.07 7.07 0 14.14l19 19q7.07 7.07 17.07 7.07h20q10 0 17.07 7.07M1081 306l7.76 7.76q7.07 7.07 7.07 17.07v20q0 10 7.07 17.07l19 19q7.07 7.07 14.14 0l26-26q7.07-7.07 0-14.14l-19-19q-7.07-7.07-17.07-7.07h-20q-10 0-17.07-7.07M1176 209.5l-7.76-7.76q-7.07-7.07-7.07-17.07v-20q0-10-7.07-17.07l-19-19q-7.07-7.07-14.14 0l-26 26q-7.07 7.07 0 14.14l19 19q7.07 7.07 17.07 7.07h20q10 0 17.07 7.07M1177 209.5l7.76 7.76q7.07 7.07 7.07 17.07v20q0 10 7.07 17.07l19 19q7.07 7.07 14.14 0l26-26q7.07-7.07 0-14.14l-19-19q-7.07-7.07-17.07-7.07h-20q-10 0-17.07-7.07" />
      </G>
      <Path d="M445.5 224.9v-35.2" stroke="#999" strokeDasharray="8, 8" />
      <Path d="M496 34h-60" stroke="#87cefa" strokeDasharray="8, 8" />
    </G>
    <G fill="#fff" strokeWidth={2}></G>
    <G fill="#fff" strokeWidth={2}>
      <Circle cx={1254} cy={132} r={3} stroke="#90a" />
      <G stroke="#005ec4">
        <Circle cx={1286} cy={736} r={3} />
        <Circle cx={1286} cy={786} r={3} />
      </G>
      <G stroke="#fa9e0d">
        <Circle cx={601} cy={429} r={3} />
        <Circle cx={630} cy={895} r={3} />
        <Circle cx={681} cy={912} r={3} />
        <Circle cx={735} cy={919} r={3} />
      </G>
      <G stroke="#784008">
        <Circle cx={658} cy={444} r={3} />
        <Circle cx={658} cy={517} r={3} />
        <Circle cx={658} cy={549} r={3} />
        <Circle cx={658} cy={648} r={3} />
        <Circle cx={658} cy={694} r={3} />
        <Circle cx={687} cy={826.4} r={3} />
        <Circle cx={741.7} cy={881} r={3} />
        <Circle cx={846} cy={913} r={3} />
        <Circle cx={911} cy={913} r={3} />
        <Circle cx={958} cy={903} r={3} />
        <Circle cx={988} cy={873} r={3} />
        <Circle cx={1024} cy={837} r={3} />
        <Circle cx={1056} cy={805} r={3} />
        <Circle cx={1104} cy={786} r={3} />
        <Circle cx={1148} cy={786} r={3} />
        <Circle cx={1192} cy={786} r={3} />
        <Circle cx={1236} cy={786} r={3} />
      </G>
      <Circle cx={436} cy={34} r={3} stroke="#87cefa" strokeWidth={1.7} />
      <Circle cx={1156} cy={150} r={2.6} stroke="#999" strokeWidth={1.7} />
      <Circle cx={445.5} cy={192.5} r={2.6} stroke="#999" strokeWidth={1.7} />
    </G>
    <G fontFamily="Arial">
      <G fontSize={12}>
        <Text x={1255} y={707}>
          {"Expo"}
        </Text>
        <Text x={1310} y={707}>
          {"Changi"}
        </Text>
        <Text x={1312} y={719}>
          {"Airport"}
        </Text>
        <Text x={1289} y={522}>
          {"Pasir Ris"}
        </Text>
        <Text x={1250} y={594}>
          {"Tampines"}
        </Text>
        <Text x={1209} y={637}>
          {"Simei"}
        </Text>
        <Text x={1171} y={672}>
          {"Bedok"}
        </Text>
        <Text x={1092} y={653}>
          {"Kembangan"}
        </Text>
        <Text x={1050} y={672}>
          {"Eunos"}
        </Text>
        <Text x={945} y={653}>
          {"Aljunied"}
        </Text>
        <Text x={906} y={673}>
          {"Kallang"}
        </Text>
        <Text x={932} y={707}>
          {"Lavender"}
        </Text>
        <Text x={650} y={864}>
          {"Tanjong"}
        </Text>
        <Text x={660} y={876}>
          {"Pagar"}
        </Text>
        <Text x={595} y={753}>
          {"Tiong"}
        </Text>
        <Text x={593} y={765}>
          {"Bahru"}
        </Text>
        <Text x={554} y={721}>
          {"Redhill"}
        </Text>
        <Text x={561} y={672.5}>
          {"Queenstown"}
        </Text>
        <Text x={525} y={636}>
          {"Commonwealth"}
        </Text>
        <Text x={418} y={581}>
          {"Dover"}
        </Text>
        <Text x={411} y={526}>
          {"Clementi"}
        </Text>
        <Text x={224} y={527}>
          {"Chinese"}
        </Text>
        <Text x={226} y={539}>
          {"Garden"}
        </Text>
        <Text x={178} y={508}>
          {"Lakeside"}
        </Text>
        <Text x={100} y={508}>
          {"Boon Lay"}
        </Text>
        <Text x={25} y={544}>
          {"Pioneer"}
        </Text>
        <Text x={47} y={568}>
          {"Joo "}
        </Text>
        <Text x={39} y={580}>
          {"Koon "}
        </Text>
        <Text x={15} y={600}>
          {"Gul Circle"}
        </Text>
        <Text x={41} y={620}>
          {"Tuas"}
        </Text>
        <Text x={19} y={632}>
          {"Crescent"}
        </Text>
        <Text x={10} y={652}>
          {"Tuas West"}
        </Text>
        <Text x={39} y={664}>
          {"Road"}
        </Text>
        <Text x={15} y={684}>
          {"Tuas Link"}
        </Text>
      </G>
      <G fontSize={12}>
        <Text x={292} y={411}>
          {"Bukit"}
        </Text>
        <Text x={292} y={423}>
          {"Batok"}
        </Text>
        <Text x={292} y={320}>
          {"Bukit"}
        </Text>
        <Text x={292} y={332}>
          {"Gombak"}
        </Text>
        <Text x={292} y={125}>
          {"Yew Tee"}
        </Text>
        <Text x={335.5} y={60}>
          {"Kranji"}
        </Text>
        <Text x={410} y={60}>
          {"Marsiling"}
        </Text>
        <Text x={606} y={60}>
          {"Admiralty"}
        </Text>
        <Text x={699} y={60}>
          {"Sembawang"}
        </Text>
        <Text x={731} y={108}>
          {"Canberra"}
        </Text>
        <Text x={743} y={156}>
          {"Yishun"}
        </Text>
        <Text x={746} y={205}>
          {"Khatib"}
        </Text>
        <Text x={763} y={246}>
          {"Yio"}
        </Text>
        <Text x={727} y={258}>
          {"Chu Kang"}
        </Text>
        <Text x={758} y={317}>
          {"Ang"}
        </Text>
        <Text x={742} y={329}>
          {"Mo Kio"}
        </Text>
        <Text x={734} y={432}>
          {"Braddell"}
        </Text>
        <Text x={779} y={473}>
          {"Toa Payoh"}
        </Text>
        <Text x={748} y={504}>
          {"Novena"}
        </Text>
        <Text x={609} y={590}>
          {"Orchard"}
        </Text>
        <Text x={709} y={634}>
          {"Somerset"}
        </Text>
        <Text x={836} y={967}>
          {"Marina"}
        </Text>
        <Text x={836} y={979}>
          {"South Pier"}
        </Text>
      </G>
      <G fontSize={12}>
        <Text x={730} y={729}>
          {"Clarke"}
        </Text>
        <Text x={730} y={741}>
          {"Quay"}
        </Text>
        <Text x={813} y={588}>
          {"Farrer Park"}
        </Text>
        <Text x={840} y={559}>
          {"Boon Keng"}
        </Text>
        <Text x={867} y={532}>
          {"Potong Pasir"}
        </Text>
        <Text x={893} y={509}>
          {"Woodleigh"}
        </Text>
        <Text x={921} y={426}>
          {"Kovan"}
        </Text>
        <Text x={992} y={408}>
          {"Hougang"}
        </Text>
        <Text x={962} y={365}>
          {"Buangkok"}
        </Text>
        <Text x={1264} y={132} fill="#aaa">
          {"Punggol Coast"}
        </Text>
      </G>
      <G fontSize={12}>
        <Text x={830} y={727}>
          {"Bras"}
        </Text>
        <Text x={830} y={739}>
          {"Basah"}
        </Text>
        <Text x={885} y={793}>
          {"Esplanade"}
        </Text>
        <Text x={976} y={790}>
          {"Nicoll"}
        </Text>
        <Text x={976} y={802}>
          {"Highway"}
        </Text>
        <Text x={990} y={760}>
          {"Stadium"}
        </Text>
        <Text x={1001} y={725}>
          {"Mountbatten"}
        </Text>
        <Text x={1008} y={691}>
          {"Dakota"}
        </Text>
        <Text x={1001} y={592}>
          {"MacPherson"}
        </Text>
        <Text x={989} y={556}>
          {"Tai Seng"}
        </Text>
        <Text x={968} y={514}>
          {"Bartley"}
        </Text>
        <Text x={855} y={398}>
          {"Lorong"}
        </Text>
        <Text x={855} y={410}>
          {"Chuan"}
        </Text>
        <Text x={690} y={383}>
          {"Marymount"}
        </Text>
        <Text x={522} y={520}>
          {"Farrer Road"}
        </Text>
        <Text x={504} y={556}>
          {"Holland"}
        </Text>
        <Text x={504} y={568}>
          {"Village"}
        </Text>
        <Text x={444} y={635}>
          {"one-"}
        </Text>
        <Text x={441} y={645}>
          {"north"}
        </Text>
        <Text x={483} y={674}>
          {"Kent"}
        </Text>
        <Text x={483} y={686}>
          {"Ridge"}
        </Text>
        <Text x={490} y={713}>
          {"Haw Par"}
        </Text>
        <Text x={490} y={725}>
          {"Villa"}
        </Text>
        <Text x={458} y={758}>
          {"Pasir"}
        </Text>
        <Text x={442} y={770}>
          {"Panjang"}
        </Text>
        <Text x={458} y={798}>
          {"Labrador"}
        </Text>
        <Text x={483} y={810}>
          {"Park"}
        </Text>
        <Text x={504} y={834}>
          {"Telok"}
        </Text>
        <Text x={488} y={846}>
          {"Blangah"}
        </Text>
      </G>
      <G fill="#aaa" fontSize={12}>
        <Text x={571} y={414}>
          {"Bukit"}
        </Text>
        <Text x={566} y={426}>
          {"Brown"}
        </Text>
        <Text x={599} y={911}>
          {"Keppel"}
        </Text>
        <Text x={636} y={928}>
          {"Cantonment"}
        </Text>
        <Text x={717} y={934}>
          {"Prince"}
        </Text>
        <Text x={713} y={946}>
          {"Edward"}
        </Text>
      </G>
      <G fontSize={12}>
        <Text x={430.5} y={272}>
          {"Cashew"}
        </Text>
        <Text x={433} y={312}>
          {"Hillview"}
        </Text>
        <Text x={436} y={352}>
          {"Beauty"}
        </Text>
        <Text x={442} y={364}>
          {"World"}
        </Text>
        <Text x={415} y={396}>
          {"King Albert"}
        </Text>
        <Text x={450} y={408}>
          {"Park"}
        </Text>
        <Text x={503} y={407}>
          {"Sixth"}
        </Text>
        <Text x={503} y={419}>
          {"Avenue"}
        </Text>
        <Text x={529} y={434}>
          {"Tan"}
        </Text>
        <Text x={529} y={446}>
          {"Kah Kee"}
        </Text>
        <Text x={664} y={484}>
          {"Stevens"}
        </Text>
        <Text x={825} y={647}>
          {"Rochor"}
        </Text>
        <Text x={809} y={865}>
          {"Downtown"}
        </Text>
        <Text x={747} y={789}>
          {"Telok"}
        </Text>
        <Text x={747} y={801}>
          {"Ayer"}
        </Text>
        <Text x={685} y={708}>
          {"Fort"}
        </Text>
        <Text x={662} y={720}>
          {"Canning"}
        </Text>
        <Text x={780} y={686}>
          {"Bencoolen"}
        </Text>
        <Text x={868} y={672}>
          {"Jalan"}
        </Text>
        <Text x={868} y={684}>
          {"Besar"}
        </Text>
        <Text x={829} y={625}>
          {"Bendeemer"}
        </Text>
        <Text x={906} y={582}>
          {"Geylang"}
        </Text>
        <Text x={912} y={594}>
          {"Bahru"}
        </Text>
        <Text x={951.5} y={615}>
          {"Mattar"}
        </Text>
        <Text x={1036} y={615}>
          {"Ubi"}
        </Text>
        <Text x={1077} y={615}>
          {"Kaki"}
        </Text>
        <Text x={1075} y={627}>
          {"Bukit"}
        </Text>
        <Text x={1110} y={582}>
          {"Bedok"}
        </Text>
        <Text x={1112} y={594}>
          {"North"}
        </Text>
        <Text x={1157} y={615}>
          {"Bedok"}
        </Text>
        <Text x={1149} y={627}>
          {"Reservoir"}
        </Text>
        <Text x={1184} y={582}>
          {"Tampines"}
        </Text>
        <Text x={1196} y={594}>
          {"West"}
        </Text>
        <Text x={1292} y={629}>
          {"Tampines"}
        </Text>
        <Text x={1292} y={641}>
          {"East"}
        </Text>
        <Text x={1292} y={663}>
          {"Upper"}
        </Text>
        <Text x={1292} y={675}>
          {"Changi"}
        </Text>
      </G>
      <G fill="#aaa" fontSize={12}>
        <Text x={1292} y={741}>
          {"Xilin"}
        </Text>
        <Text x={1269} y={802}>
          {"Sungei"}
        </Text>
        <Text x={1271} y={814}>
          {"Bedok"}
        </Text>
      </G>
      <G fontSize={12}>
        <Text x={506} y={29}>
          {"Woodlands"}
        </Text>
        <Text x={506} y={41}>
          {"North"}
        </Text>
        <Text x={586} y={109}>
          {"Woodlands"}
        </Text>
        <Text x={586} y={121}>
          {"South"}
        </Text>
        <Text x={632} y={163}>
          {"Springleaf"}
        </Text>
        <Text x={665} y={212}>
          {"Lentor"}
        </Text>
        <Text x={665} y={250}>
          {"Mayflower"}
        </Text>
        <Text x={622} y={292}>
          {"Bright"}
        </Text>
        <Text x={637} y={304}>
          {"Hill"}
        </Text>
        <Text x={621} y={354}>
          {"Upper"}
        </Text>
        <Text x={604} y={366}>
          {"Thomson"}
        </Text>
      </G>
      <G fill="#aaa" fontSize={12}>
        <Text x={665} y={442}>
          {"Mount"}
        </Text>
        <Text x={665} y={454}>
          {"Pleasant"}
        </Text>
        <Text x={617} y={520}>
          {"Napier"}
        </Text>
        <Text x={610} y={546}>
          {"Orchard"}
        </Text>
        <Text x={599} y={558}>
          {"Boulevard"}
        </Text>
        <Text x={622} y={647}>
          {"Great"}
        </Text>
        <Text x={621} y={659}>
          {"World"}
        </Text>
        <Text x={603} y={697}>
          {"Havelock"}
        </Text>
        <Text x={694} y={827}>
          {"Maxwell"}
        </Text>
        <Text x={694} y={890}>
          {"Shenton"}
        </Text>
        <Text x={716} y={902}>
          {"Way"}
        </Text>
        <Text x={828} y={928}>
          {"Marina"}
        </Text>
        <Text x={830} y={940}>
          {"South"}
        </Text>
        <Text x={889} y={928}>
          {"Gardens"}
        </Text>
        <Text x={883} y={940}>
          {"by the Bay"}
        </Text>
        <Text x={965} y={911}>
          {"Tanjong"}
        </Text>
        <Text x={965} y={923}>
          {"Rhu"}
        </Text>
        <Text x={995} y={882}>
          {"Katong Park"}
        </Text>
        <Text x={1030} y={846}>
          {"Tanjong"}
        </Text>
        <Text x={1030} y={858}>
          {"Katong"}
        </Text>
        <Text x={1062} y={813}>
          {"Marine"}
        </Text>
        <Text x={1062} y={825}>
          {"Parade"}
        </Text>
        <Text x={1086} y={766}>
          {"Marine"}
        </Text>
        <Text x={1084} y={778}>
          {"Terrace"}
        </Text>
        <Text x={1132} y={802}>
          {"Siglap"}
        </Text>
        <Text x={1168} y={778}>
          {"Bayshore"}
        </Text>
        <Text x={1219} y={802}>
          {"Bedok"}
        </Text>
        <Text x={1220} y={814}>
          {"South"}
        </Text>
      </G>
      <G fontWeight="bold" fontSize={12}>
        <Text x={708} y={686}>
          {"Dhoby"}
        </Text>
        <Text x={709} y={698}>
          {"Ghaut"}
        </Text>
        <Text x={759} y={931}>
          {"Marina"}
        </Text>
        <Text x={776} y={943}>
          {"Bay"}
        </Text>
        <Text x={885} y={888}>
          {"Bayfront"}
        </Text>
        <Text x={951} y={827}>
          {"Promenade"}
        </Text>
        <Text x={1010} y={641}>
          {"Paya"}
        </Text>
        <Text x={1010} y={653}>
          {"Lebar"}
        </Text>
        <Text x={933} y={468}>
          {"Serangoon"}
        </Text>
        <Text x={793} y={390}>
          {"Bishan"}
        </Text>
        <Text x={491} y={470}>
          {"Botanic"}
        </Text>
        <Text x={598} y={397}>
          {"Caldecott"}
        </Text>
        <Text x={486} y={482}>
          {"Gardens"}
        </Text>
        <Text x={489} y={600}>
          {"Buona Vista"}
        </Text>
        <Text x={495} y={875}>
          {"HarbourFront"}
        </Text>
        <Text x={1235} y={670}>
          {"Tanah"}
        </Text>
        <Text x={1235} y={682}>
          {"Merah"}
        </Text>
        <Text x={908} y={730}>
          {"Bugis"}
        </Text>
        <Text x={840} y={799}>
          {"City"}
        </Text>
        <Text x={840} y={811}>
          {"Hall"}
        </Text>
        <Text x={808} y={831}>
          {"Raffles"}
        </Text>
        <Text x={808} y={843}>
          {"Place"}
        </Text>
        <Text x={605} y={782}>
          {"Outram"}
        </Text>
        <Text x={621} y={794}>
          {"Park"}
        </Text>
        <Text x={292} y={495}>
          {"Jurong"}
        </Text>
        <Text x={292} y={508}>
          {"East"}
        </Text>
        <Text x={247} y={213}>
          {"Choa"}
        </Text>
        <Text x={221} y={225}>
          {"Chu Kang"}
        </Text>
        <Text x={530} y={60}>
          {"Woodlands"}
        </Text>
        <Text x={714} y={536}>
          {"Newton"}
        </Text>
        <Text x={702} y={758}>
          {"Chinatown"}
        </Text>
        <Text x={739} y={605}>
          {"Little"}
        </Text>
        <Text x={738} y={617}>
          {"India"}
        </Text>
        <Text x={1013} y={309}>
          {"Sengkang"}
        </Text>
        <Text x={1117} y={215}>
          {"Punggol"}
        </Text>
        <Text x={465} y={204}>
          {"Bukit"}
        </Text>
        <Text x={456} y={215}>
          {"Panjang"}
        </Text>
      </G>
      <G fontSize={10}>
        <Text x={307} y={211}>
          {"South"}
        </Text>
        <Text x={309} y={221}>
          {"View"}
        </Text>
        <Text x={345} y={239}>
          {"Keat"}
        </Text>
        <Text x={344} y={249}>
          {"Hong"}
        </Text>
        <Text x={380} y={211}>
          {"Teck"}
        </Text>
        <Text x={378} y={221}>
          {"Whye"}
        </Text>
        <Text x={407} y={239}>
          {"Phoenix"}
        </Text>
        <Text x={425} y={176} fill="#aaa">
          {"Ten Mile"}
        </Text>
        <Text x={425} y={186} fill="#aaa">
          {"Junction"}
        </Text>
        <Text x={525} y={242}>
          {"Petir"}
        </Text>
        <Text x={525} y={272}>
          {"Pending"}
        </Text>
        <Text x={569} y={251}>
          {"Bangkit"}
        </Text>
        <Text x={569} y={229}>
          {"Fajar"}
        </Text>
        <Text x={569} y={207}>
          {"Segar"}
        </Text>
        <Text x={525} y={186}>
          {"Jelapang"}
        </Text>
        <Text x={525} y={215}>
          {"Senja"}
        </Text>
      </G>
      <G fontSize={10}>
        <Text x={1096} y={315}>
          {"Compassvale"}
        </Text>
        <Text x={1155} y={335}>
          {"Rumbia"}
        </Text>
        <Text x={1157} y={379}>
          {"Bakau"}
        </Text>
        <Text x={1071} y={384}>
          {"Kangkar"}
        </Text>
        <Text x={1045} y={354}>
          {"Ranggung"}
        </Text>
        <Text x={1071} y={273}>
          {"Cheng"}
        </Text>
        <Text x={1071} y={283}>
          {"Lim"}
        </Text>
        <Text x={1065} y={246}>
          {"Farmway"}
        </Text>
        <Text x={1048} y={228}>
          {"Kupang"}
        </Text>
        <Text x={970} y={226}>
          {"Thanggam"}
        </Text>
        <Text x={961} y={246}>
          {"Fernvale"}
        </Text>
        <Text x={974} y={277}>
          {"Layar"}
        </Text>
        <Text x={973} y={293}>
          {"Tongkang"}
        </Text>
        <Text x={1025} y={286}>
          {"Renjong"}
        </Text>
      </G>
      <G fontSize={10}>
        <Text x={1164} y={250}>
          {"Cove"}
        </Text>
        <Text x={1154} y={275}>
          {"Meridian"}
        </Text>
        <Text x={1160} y={293}>
          {"Coral Edge"}
        </Text>
        <Text x={1252} y={282}>
          {"Riviera"}
        </Text>
        <Text x={1259} y={245}>
          {"Kadaloor"}
        </Text>
        <Text x={1243} y={229}>
          {"Oasis"}
        </Text>
        <Text x={1198} y={219}>
          {"Damai"}
        </Text>
        <Text x={1166} y={177}>
          {"Sam Kee"}
        </Text>
        <Text x={1162} y={150} fill="#aaa">
          {"Teck Lee"}
        </Text>
        <Text x={1145} y={131}>
          {"Punggol Point"}
        </Text>
        <Text x={1056} y={142}>
          {"Samudera"}
        </Text>
        <Text x={1063} y={181}>
          {"Nibong"}
        </Text>
        <Text x={1075} y={198}>
          {"Sumang"}
        </Text>
        <Text x={1131} y={182}>
          {"Soo"}
        </Text>
        <Text x={1130} y={191}>
          {"Teck"}
        </Text>
      </G>
      <G fill="#aaa" fontSize={12}>
        <Text x={360} y={29}>
          {"Bukit Chagar"}
        </Text>
        <Text x={356} y={41}>
          {"(Johor Bahru)"}
        </Text>
      </G>
    </G>
  </Svg>
)

export default SvgComponent
