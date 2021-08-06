import { queryField, nonNull, list } from 'nexus'

export const PersonalInterestsFindCountQuery = queryField(
  'findManyPersonalInterestsCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'PersonalInterestsWhereInput',
      orderBy: list('PersonalInterestsOrderByInput'),
      cursor: 'PersonalInterestsWhereUniqueInput',
      distinct: 'PersonalInterestsScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.personalInterests.count(args as any)
    },
  },
)
