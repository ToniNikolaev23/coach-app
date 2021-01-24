<template>
    <section>
        <base-card>
            <h2>Register as a couch now!</h2>
        <coach-form @add-coach="saveData"></coach-form>
        </base-card>
        
    </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue'
export default {
    components: {
        CoachForm
    },
    methods:{
        saveData(formData){
            this.$store.dispatch('coaches/registerCoach', formData)

            this.$router.push('/coaches')
        }
    }
}
</script>