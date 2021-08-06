import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesSourceCreateOneMutation = mutationField(
  'createOneAssetsAndLiabilitiesSource',
  {
    type: nonNull('AssetsAndLiabilitiesSource'),
    args: {
      data: nonNull('AssetsAndLiabilitiesSourceCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.assetsAndLiabilitiesSource.create({
        data,
        ...select,
      })
    },
  },
)
