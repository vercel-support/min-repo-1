import { queryField, nonNull } from 'nexus'

export const PersonalInterestsFindUniqueQuery = queryField(
  'findUniquePersonalInterests',
  {
    type: 'PersonalInterests',
    args: {
      where: nonNull('PersonalInterestsWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.personalInterests.findUnique({
        where,
        ...select,
      })
    },
  },
)
