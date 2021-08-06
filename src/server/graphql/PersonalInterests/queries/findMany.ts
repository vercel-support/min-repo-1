import { queryField, nonNull, list } from 'nexus'

export const PersonalInterestsFindManyQuery = queryField(
  'findManyPersonalInterests',
  {
    type: nonNull(list(nonNull('PersonalInterests'))),
    args: {
      where: 'PersonalInterestsWhereInput',
      orderBy: list('PersonalInterestsOrderByInput'),
      cursor: 'PersonalInterestsWhereUniqueInput',
      distinct: 'PersonalInterestsScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.personalInterests.findMany({
        ...args,
        ...select,
      })
    },
  },
)
