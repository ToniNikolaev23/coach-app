import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state(){
        return{
          lastFetch: null,
            coaches : [
                {
                  id: 'c1',
                  firstName: 'Maximilian',
                  lastName: 'Schwarzmüller',
                  areas: ['frontend', 'backend', 'career'],
                  description:
                    "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                  hourlyRate: 30
                },
                {
                  id: 'c2',
                  firstName: 'Toni',
                  lastName: 'Stoyanov',
                  areas: ['frontend', 'career', 'vue'],
                  description:
                    'I am Toni and i like VueJS',
                  hourlyRate: 30
                }
              ]
        }
    },
    mutations,
    actions,
    getters
}