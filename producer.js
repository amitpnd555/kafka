console.log("Producer Ready...");
const kafka = require('node-rdkafka');

const stream = kafka.Producer.createWriteStream({
  'metadata.broker.list': 'localhost:9092'
}, {}, {topic: 'test'});

stream.on('error', (err) => {
  console.error('Error in our kafka stream');
  console.error(err);
});

const queueMessage = () => {
    let testArray = ["Test - 1", "Test - 2", "Test - 3", "Test - 4"]
    const result = stream.write(Buffer.from(JSON.stringify(testArray)));
    if(result){
    console.log("Message wrote successfully to stream");
    }else{
        console.log("Something went wrong");
    }
}

queueMessage();
