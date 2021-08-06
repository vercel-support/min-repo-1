import { queryField, nonNull, list } from 'nexus'

export const OpportunityTypeFindCountQuery = queryField(
  'findManyOpportunityTypeCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'OpportunityTypeWhereInput',
      orderBy: list('OpportunityTypeOrderByInput'),
      cursor: 'OpportunityTypeWhereUniqueInput',
      distinct: 'OpportunityTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.opportunityType.count(args as any)
    },
  },
)
