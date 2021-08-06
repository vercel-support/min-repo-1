import { objectType } from 'nexus'

export const OpportunityLossReason = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'OpportunityLossReason',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('OpportunityLossReason', {
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
        return root.OpportunityLossReason
      },
    })
    t.nullable.field('_count', {
      type: 'OpportunityLossReasonCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
