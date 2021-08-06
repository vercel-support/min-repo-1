import { objectType } from 'nexus'

export const OpportunityStageName = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'OpportunityStageName',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.nullable.int('probability')
    t.nullable.string('foreCastCategory')
    t.list.field('OpportunityStageName', {
      type: 'Opportunity',
      args: {
        where: 'OpportunityWhereInput',
        orderBy: 'OpportunityOrderByInput',
        cursor: 'OpportunityWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'OpportunityScalarFieldEnum',
      },
      resolve(root: any) {
        return root.OpportunityStageName
      },
    })
    t.nullable.field('_count', {
      type: 'OpportunityStageNameCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
