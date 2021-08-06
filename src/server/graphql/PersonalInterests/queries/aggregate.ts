import { queryField, list } from 'nexus'

export const PersonalInterestsAggregateQuery = queryField(
  'aggregatePersonalInterests',
  {
    type: 'AggregatePersonalInterests',
    args: {
      where: 'PersonalInterestsWhereInput',
      orderBy: list('PersonalInterestsOrderByInput'),
      cursor: 'PersonalInterestsWhereUniqueInput',
      distinct: 'PersonalInterestsScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.personalInterests.aggregate({ ...args, ...select }) as any
    },
  },
)
