import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return [{
            host_name:"Microsoft",
            ip:"192.168.154.2",
            name:'Samba',
            port:'666',
            type:'TCP'
        },
        {
            host_name:"Sony",
            ip:"192.168.154.2",
            name:'SSH',
            port:'23',
            type:'TCP'
        },
        {
            host_name:"RedHat",
            ip:"192.168.154.2",
            name:'HTTP',
            port:'80',
            type:'UDP'
        }];
    }
});
