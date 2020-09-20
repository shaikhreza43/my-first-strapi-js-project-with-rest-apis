module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        "uri":"mongodb://ahmed:ahmed1234@resolute-ai-cms-cluster-shard-00-00.hmevd.mongodb.net:27017,resolute-ai-cms-cluster-shard-00-01.hmevd.mongodb.net:27017,resolute-ai-cms-cluster-shard-00-02.hmevd.mongodb.net:27017/test-cms?ssl=true&replicaSet=atlas-crldd6-shard-0&authSource=admin&retryWrites=true&w=majority"
      },
      options: {
        useNullAsDefault: true,
        "ssl":true
      },
    },
  },
});
