import { mutationField, nonNull } from 'nexus'

export const CampaignTypeUpdateOneMutation = mutationField(
  'updateOneCampaignType',
  {
    type: nonNull('CampaignType'),
    args: {
      where: nonNull('CampaignTypeWhereUniqueInput'),
      data: nonNull('CampaignTypeUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.campaignType.update({
        where,
        data,
        ...select,
      })
    },
  },
)
