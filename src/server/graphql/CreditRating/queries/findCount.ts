import { queryField, nonNull, list } from 'nexus'

export const CreditRatingFindCountQuery = queryField(
  'findManyCreditRatingCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'CreditRatingWhereInput',
      orderBy: list('CreditRatingOrderByInput'),
      cursor: 'CreditRatingWhereUniqueInput',
      distinct: 'CreditRatingScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.creditRating.count(args as any)
    },
  },
)
