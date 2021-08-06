import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesCreateOneMutation = mutationField(
  'createOneAssetsAndLiabilities',
  {
    type: nonNull('AssetsAndLiabilities'),
    args: {
      data: nonNull('AssetsAndLiabilitiesCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.assetsAndLiabilities.create({
        data,
        ...select,
      })
    },
  },
)
