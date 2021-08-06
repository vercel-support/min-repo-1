import { objectType } from 'nexus'

export const OpportunityRecordType = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'OpportunityRecordType',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.nullable.string('description')
    t.list.field('OpportunityRecordType', {
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
        return root.OpportunityRecordType
      },
    })
    t.nullable.field('_count', {
      type: 'OpportunityRecordTypeCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
