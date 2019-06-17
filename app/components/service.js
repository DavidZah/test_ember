import Component from '@ember/component';

export default Component.extend({
    model(){
        return [{
            ip:"192.168.154.2",
            name:'Samba',
            port:'666',
            type:'TCP'
        },
        {
            ip:"192.168.154.2",
            name:'SSH',
            port:'23',
            type:'TCP'
        },
        {
            ip:"192.168.154.2",
            name:'HTTP',
            port:'80',
            type:'UDP'
        }];
    }
});
