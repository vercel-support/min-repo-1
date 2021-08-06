import { queryField, list } from 'nexus'

export const PersonalInterestsFindFirstQuery = queryField(
  'findFirstPersonalInterests',
  {
    type: 'PersonalInterests',
    args: {
      where: 'PersonalInterestsWhereInput',
      orderBy: list('PersonalInterestsOrderByInput'),
      cursor: 'PersonalInterestsWhereUniqueInput',
      distinct: 'PersonalInterestsScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.personalInterests.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
