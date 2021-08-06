import { queryField, nonNull, list } from 'nexus'

export const OpportunityRecordTypeFindManyQuery = queryField(
  'findManyOpportunityRecordType',
  {
    type: nonNull(list(nonNull('OpportunityRecordType'))),
    args: {
      where: 'OpportunityRecordTypeWhereInput',
      orderBy: list('OpportunityRecordTypeOrderByInput'),
      cursor: 'OpportunityRecordTypeWhereUniqueInput',
      distinct: 'OpportunityRecordTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.opportunityRecordType.findMany({
        ...args,
        ...select,
      })
    },
  },
)
