import { queryField, list } from 'nexus'

export const OpportunityRecordTypeFindFirstQuery = queryField(
  'findFirstOpportunityRecordType',
  {
    type: 'OpportunityRecordType',
    args: {
      where: 'OpportunityRecordTypeWhereInput',
      orderBy: list('OpportunityRecordTypeOrderByInput'),
      cursor: 'OpportunityRecordTypeWhereUniqueInput',
      distinct: 'OpportunityRecordTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.opportunityRecordType.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
