import { queryField, list } from 'nexus'

export const OpportunityRecordTypeAggregateQuery = queryField(
  'aggregateOpportunityRecordType',
  {
    type: 'AggregateOpportunityRecordType',
    args: {
      where: 'OpportunityRecordTypeWhereInput',
      orderBy: list('OpportunityRecordTypeOrderByInput'),
      cursor: 'OpportunityRecordTypeWhereUniqueInput',
      distinct: 'OpportunityRecordTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.opportunityRecordType.aggregate({
        ...args,
        ...select,
      }) as any
    },
  },
)
