import { mutationField, nonNull } from 'nexus'

export const PersonalInterestsCreateOneMutation = mutationField(
  'createOnePersonalInterests',
  {
    type: nonNull('PersonalInterests'),
    args: {
      data: nonNull('PersonalInterestsCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.personalInterests.create({
        data,
        ...select,
      })
    },
  },
)
