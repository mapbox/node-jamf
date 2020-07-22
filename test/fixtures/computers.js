module.exports.allComputers = allComputers;
module.exports.xmlAllComputers = xmlAllComputers;

function allComputers() {
    var allComputersList = { computers:
   [ { id: 1, name: 'MacBook Air' },
       { id: 2, name: 'iMac' },
       { id: 3, name: 'Alex’s Macbook Air' },
       { id: 4, name: 'Ian’s Macbook Pro' },
       { id: 5, name: 'Olivia’s iMac' } ] }
    return allComputersList;
}

function xmlAllComputers() {
    var xmlAllComputersList = '<?xml version="1.0" encoding="UTF-8"?><computers><size>6</size><computer><id>1</id><name>MacBook Air</name></computer><computer><id>2</id><name>iMac</name></computer><computer><id>3</id><name>Alex’s Macbook Air</name></computer><computer><id>4</id><name>Ian’s Macbook Pro</name></computer><computer><id>5</id><name>Olivia’s iMac</name></computer></computers>'
    return xmlAllComputersList;
}