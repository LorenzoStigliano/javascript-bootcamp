//read in data
const fs = require('fs')

const text = fs.readFileSync('./text.txt',
            {encoding:'utf8', flag:'r'})

//split data by line
const data = text.split('\n')

//get individual entries
let dataSplit = []
data.forEach((line)=>{
  dataSplit.push(line.split(', '))
})

//create object for parties 
const objectParties = {
  C: 'Conservative Party',
  L: 'Labour Party',
  UKIP: 'UKIP',
  LD: 'Liberal Democrats',
  G: 'Green Party',
  Ind: 'Independent',
  SNP: 'SNP'
}

//function which gets a line and returns a list of objects for a given constituency
function getConsituencyData(constituency_data){
  
  let constituency = constituency_data[0]
  let total_votes = 0
  
  constituency_data.forEach((data)=>{
    if(Number.isInteger(parseInt(data))){
      total_votes += parseInt(data)
      }
   })
  
  arrayData = []

  constituency_data.forEach((data, index)=>{
    if(Object.keys(objectParties).includes(data)){
        
        const partyObject = {
          constituencyName: constituency, 
          partyName: objectParties[data], 
          percentageOfTotalVotes: constituency_data[index-1]/total_votes*100}
        
        arrayData.push(partyObject)
      }
   })

  return arrayData
}

//function that returns list of list with objects for each party with the data needed
function returnData(dataSplit){
  
  let allData = []

  dataSplit.forEach((line)=>{
    allData.push(getConsituencyData(line))
  })

  return allData
}

console.log(returnData(dataSplit))