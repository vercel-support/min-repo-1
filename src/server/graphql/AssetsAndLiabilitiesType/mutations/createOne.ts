import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesTypeCreateOneMutation = mutationField(
  'createOneAssetsAndLiabilitiesType',
  {
    type: nonNull('AssetsAndLiabilitiesType'),
    args: {
      data: nonNull('AssetsAndLiabilitiesTypeCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.assetsAndLiabilitiesType.create({
        data,
        ...select,
      })
    },
  },
)
