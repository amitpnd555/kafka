console.log("Consumer Ready...")
const kafka = require('node-rdkafka');

const consumer = kafka.KafkaConsumer({
    'group.id': 'kafka',
    'metadata.broker.list': 'localhost:9092'
}, {});

consumer.connect();

consumer.on('ready', ()=> {
    console.log('Consumer ready...');
    consumer.subscribe(['test']);
    consumer.consume();
}).on('data', function(data) {
    const array = JSON.parse(`${data.value}`)

    for(let i=0;i<array.length;i++){
        console.log(array[i]);
    }
  });