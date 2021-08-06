import { objectType } from 'nexus'

export const OpportunityType = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'OpportunityType',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.list.field('OpportunityType', {
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
        return root.OpportunityType
      },
    })
    t.nullable.field('_count', {
      type: 'OpportunityTypeCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
