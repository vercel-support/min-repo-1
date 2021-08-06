import { queryField, nonNull, list } from 'nexus'

export const OpportunityRecordTypeFindCountQuery = queryField(
  'findManyOpportunityRecordTypeCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'OpportunityRecordTypeWhereInput',
      orderBy: list('OpportunityRecordTypeOrderByInput'),
      cursor: 'OpportunityRecordTypeWhereUniqueInput',
      distinct: 'OpportunityRecordTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.opportunityRecordType.count(args as any)
    },
  },
)
