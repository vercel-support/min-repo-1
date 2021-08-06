import { mutationField, nonNull } from 'nexus'

export const PersonalInterestsUpdateOneMutation = mutationField(
  'updateOnePersonalInterests',
  {
    type: nonNull('PersonalInterests'),
    args: {
      where: nonNull('PersonalInterestsWhereUniqueInput'),
      data: nonNull('PersonalInterestsUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.personalInterests.update({
        where,
        data,
        ...select,
      })
    },
  },
)
